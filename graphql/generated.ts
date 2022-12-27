import { GraphQLClient } from 'graphql-request';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BetweenFilter = {
  max: Scalars['String'];
  min: Scalars['String'];
};

/** 셀 */
export type Cell = {
  __typename?: 'Cell';
  /** 비고 */
  description?: Maybe<Scalars['String']>;
  /** 아이디 */
  id: Scalars['ID'];
  /** 셀원 */
  leaders: Array<User>;
  /** 셀원 */
  members: Array<User>;
  /** 셀 이름 */
  name: Scalars['String'];
  /** Cell 관련 통계값 */
  statistics: StatisticsOfCell;
  /** 해당 셀로의 셀원 이동 신청 내역 */
  transfersIn: Array<UserCellTransfer>;
  /** 해당 셀로의 셀원 이동 신청 내역 */
  transfersOut: Array<UserCellTransfer>;
};


/** 셀 */
export type CellTransfersInArgs = {
  orderDate?: InputMaybe<DateFilter>;
  status?: InputMaybe<Array<UserCellTransferStatus>>;
};


/** 셀 */
export type CellTransfersOutArgs = {
  orderDate?: InputMaybe<DateFilter>;
  status?: InputMaybe<Array<UserCellTransferStatus>>;
};

/** 예배 */
export type ChurchService = {
  __typename?: 'ChurchService';
  /** 비고 */
  description?: Maybe<Scalars['String']>;
  /** 아이디 */
  id: Scalars['ID'];
  /** 예배 활성화 여부 */
  isActive: Scalars['Boolean'];
  /** 예배 이름 (1부 예배, 2부 예배, 등) */
  name: Scalars['String'];
  /** 예배 시작 시간 (8:00, 9:30, 11:30, 14:15 등) */
  startAt: Scalars['String'];
};

export type CreateCellInput = {
  /** 셀 리더 ID */
  cellLeaderId: Scalars['ID'];
  /** 비고 */
  description?: InputMaybe<Scalars['String']>;
  /** 셀 이름 */
  name: Scalars['String'];
};

export type CreateCellPayload = {
  __typename?: 'CreateCellPayload';
  cell: Cell;
};

export type CreateUserCellTransferBulkInput = {
  createUserCellTransferInputs: Array<CreateUserCellTransferInput>;
  /** 셀원 이동 신청일자 (yyyy-MM-dd) */
  orderDate: Scalars['String'];
};

export type CreateUserCellTransferBulkPayload = {
  __typename?: 'CreateUserCellTransferBulkPayload';
  success: Scalars['Boolean'];
};

export type CreateUserCellTransferInput = {
  /** from 셀 id */
  fromCellId: Scalars['ID'];
  /** to 셀 id */
  toCellId: Scalars['ID'];
  /** 이동할 셀원 id */
  userId: Scalars['ID'];
};

export type DateFilter = {
  between: BetweenFilter;
};

export type DeleteCellInput = {
  /** 셀 아이디 */
  cellId: Scalars['Int'];
};

export type DeleteCellPayload = {
  __typename?: 'DeleteCellPayload';
  /** 삭제된 셀 */
  cell: Cell;
};

export type FindCellsPayload = {
  __typename?: 'FindCellsPayload';
  nodes: Array<Cell>;
  totalCount: Scalars['Int'];
};

export type FindUsersPayload = {
  __typename?: 'FindUsersPayload';
  nodes: Array<User>;
  totalCount: Scalars['Int'];
};

export enum Gender {
  /** 남성 */
  Man = 'MAN',
  /** 여성 */
  Woman = 'WOMAN'
}

export type LoginInput = {
  /** 로그인 비밀번호 */
  password: Scalars['String'];
  /** 전화번호 */
  phone: Scalars['String'];
};

export type LoginPayload = {
  __typename?: 'LoginPayload';
  /** 토큰 */
  accessToken: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCell: CreateCellPayload;
  /** 셀원을 다른 셀로 이동시키는 셀 이동 신청을 생성합니다. */
  createUserCellTransferBulk: CreateUserCellTransferBulkPayload;
  deleteCell: DeleteCellPayload;
  login: LoginPayload;
  /** 새가족 등록을 처리합니다. */
  registerNewUser: RegisterNewUserPayload;
  resetUserPassword: ResetUserPasswordPayload;
  signUp: SignUpPayload;
  /** 셀장이 셀원들의 예배 출석 이력 다건을 기록합니다. */
  submitCellMemberChurchServiceAttendanceHistories: SubmitCellMemberChurchServiceAttendanceHistoriesPayload;
  /** 사용자 정보를 업데이트 합니다. */
  updateUser: UpdateUserPayload;
};


export type MutationCreateCellArgs = {
  input: CreateCellInput;
};


export type MutationCreateUserCellTransferBulkArgs = {
  input: CreateUserCellTransferBulkInput;
};


export type MutationDeleteCellArgs = {
  input: DeleteCellInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRegisterNewUserArgs = {
  input: RegisterNewUserInput;
};


export type MutationResetUserPasswordArgs = {
  input: ResetUserPasswordInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationSubmitCellMemberChurchServiceAttendanceHistoriesArgs = {
  input: SubmitCellMemberChurchServiceAttendanceHistoriesInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  /** 셀 단건 조회 */
  findCell: Cell;
  /** 셀 전체 조회 */
  findCells: FindCellsPayload;
  findChurchServices: Array<ChurchService>;
  /** 전체 사용자 조회 */
  findUsers: FindUsersPayload;
  /** 셀원 조회. 셀장만 셀원 조회가 가능합니다. */
  myCellMembers?: Maybe<Array<User>>;
};


export type QueryFindCellArgs = {
  id: Scalars['Float'];
};


export type QueryFindCellsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryFindUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type RegisterNewUserInput = {
  /** 주소 */
  address?: InputMaybe<Scalars['String']>;
  /** 생년월일(yyyy-MM-dd) */
  birthday: Scalars['String'];
  /** 비고 */
  description?: InputMaybe<Scalars['String']>;
  /** 성별 */
  gender: Gender;
  /** 이름 */
  name: Scalars['String'];
  /** 전화번호 */
  phone: Scalars['String'];
};

export type RegisterNewUserPayload = {
  __typename?: 'RegisterNewUserPayload';
  user: User;
};

export type ResetUserPasswordInput = {
  userId: Scalars['ID'];
};

export type ResetUserPasswordPayload = {
  __typename?: 'ResetUserPasswordPayload';
  user: User;
};

export enum RoleType {
  /** 관리자 (목사님, 간사님) */
  Admin = 'ADMIN',
  /** 셀 리더 */
  CellLeader = 'CELL_LEADER',
  /** 운영자 (개발자 등) */
  Operator = 'OPERATOR',
  /** 부 리더 */
  ViceLeader = 'VICE_LEADER'
}

export type SignUpInput = {
  /** 회원 가입 인증 번호 */
  authenticationNumber: Scalars['String'];
  /** 비고 */
  description?: InputMaybe<Scalars['String']>;
  /** 이름 */
  name: Scalars['String'];
  /** 로그인 비밀번호 */
  password: Scalars['String'];
  /** 전화번호 */
  phone: Scalars['String'];
};

export type SignUpPayload = {
  __typename?: 'SignUpPayload';
  user: User;
};

export type StatisticsOfCell = {
  __typename?: 'StatisticsOfCell';
  countOfActiveMembers: Scalars['Int'];
  totalCountOfMembers: Scalars['Int'];
};

export type SubmitCellMemberChurchServiceAttendanceHistoriesInput = {
  /** 셀원 예배 출석이력 제출 기준일자(yyyy-MM-dd). 예) 2022년 5월 29일 예배에 대한 제출이면 2022-05-29 로 입력 */
  baseDate: Scalars['String'];
  /** 셀원 출석 이력 목록 */
  userChurchServiceHistories: Array<UserChurchServiceHistoryInput>;
};

export type SubmitCellMemberChurchServiceAttendanceHistoriesPayload = {
  __typename?: 'SubmitCellMemberChurchServiceAttendanceHistoriesPayload';
  /** 처리된 출석이력 건수 */
  processedAttendanceHistoryCount: Scalars['Int'];
  /** 출석이력 제출요청 건수 */
  requestedAttendanceHistoryCount: Scalars['Int'];
};

export type UpdateUserInput = {
  /** 주소 */
  address?: InputMaybe<Scalars['String']>;
  /** 생년월일(yyyy-MM-dd) */
  birthday: Scalars['String'];
  /** 비고 */
  description?: InputMaybe<Scalars['String']>;
  /** 성별 */
  gender: Gender;
  /** 아이디 */
  id: Scalars['ID'];
  /** 자주 출석하는 지 여부 */
  isActive: Scalars['Boolean'];
  /** 이름 */
  name: Scalars['String'];
  /** 전화번호 */
  phone: Scalars['String'];
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  user: User;
};

/** 사용자(인터치 소속 성도, 간사님, 목사님) */
export type User = {
  __typename?: 'User';
  /** 주소 */
  address?: Maybe<Scalars['String']>;
  /** 생년월일(yyyy-MM-dd) */
  birthday?: Maybe<Scalars['String']>;
  /** 사용자가 속한 셀 */
  cell?: Maybe<Cell>;
  /** 비고 */
  description?: Maybe<Scalars['String']>;
  /** 성별 */
  gender?: Maybe<Gender>;
  /** 아이디 */
  id: Scalars['ID'];
  /** 자주 출석하는 지 여부 */
  isActive: Scalars['Boolean'];
  /** 이름 */
  name: Scalars['String'];
  /** 전화번호 */
  phone: Scalars['String'];
  /** Roles */
  roles: Array<RoleType>;
  userChurchServiceHistories: Array<UserChurchServiceHistory>;
};


/** 사용자(인터치 소속 성도, 간사님, 목사님) */
export type UserUserChurchServiceHistoriesArgs = {
  baseDate: Scalars['String'];
};

/** 셀원의 셀 이동 신청 내역 */
export type UserCellTransfer = {
  __typename?: 'UserCellTransfer';
  /** 신청처리 완료일자 */
  completeDate?: Maybe<Scalars['String']>;
  fromCell: Cell;
  id: Scalars['ID'];
  /** 신청일자 */
  orderDate: Scalars['String'];
  status: UserCellTransferStatus;
  toCell: Cell;
  /** 셀원 */
  user: User;
};

/** 셀원 이동 신청 상태 */
export enum UserCellTransferStatus {
  /** 거절됨 */
  Canceled = 'CANCELED',
  /** 승인됨 */
  Confirmed = 'CONFIRMED',
  /** 신청됨 */
  Ordered = 'ORDERED'
}

/** 셀원 예배 출석 이력 */
export type UserChurchServiceHistory = {
  __typename?: 'UserChurchServiceHistory';
  /** 예배 출석일 (yyyy-MM-dd) */
  attendedAt: Scalars['String'];
  churchService: ChurchService;
  /** 비고 */
  description?: Maybe<Scalars['String']>;
  /** 셀원 예배 출석 이력 식별자 */
  id: Scalars['ID'];
  /** 성전/온라인 여부 (true => 온라인) */
  isOnline: Scalars['Boolean'];
  user: User;
};

export type UserChurchServiceHistoryInput = {
  /** 예배 출석일 (yyyy-MM-dd) */
  attendedAt: Scalars['String'];
  /** 예배 아이디 */
  churchServiceId: Scalars['ID'];
  /** 비고 */
  description?: InputMaybe<Scalars['String']>;
  /** 성전/온라인 여부 (true => 온라인) */
  isOnline: Scalars['Boolean'];
  /** 사용자(셀원) 아이디 */
  userId: Scalars['ID'];
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginPayload', accessToken: string, user: { __typename?: 'User', id: string, name: string, phone: string, roles: Array<RoleType> } } };


export const LoginDocument = `
    mutation login($input: LoginInput!) {
  login(input: $input) {
    accessToken
    user {
      id
      name
      phone
      roles
    }
  }
}
    `;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      ['login'],
      (variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(client, LoginDocument, variables, headers)(),
      options
    );