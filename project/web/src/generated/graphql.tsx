/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Cut = {
  __typename?: 'Cut';
  film?: Maybe<Film>;
  /** 영화 아이디 */
  filmId: Scalars['Int'];
  /** 명장면 고유 아이디 */
  id: Scalars['Int'];
  /** 명장면 사진 주소 */
  src: Scalars['String'];
};

export type Director = {
  __typename?: 'Director';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** 필드 에러 타입 */
export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Film = {
  __typename?: 'Film';
  /** 영화 줄거리 및 설명 */
  description: Scalars['String'];
  director: Director;
  /** 제작자 고유 아이디 */
  director_id: Scalars['Int'];
  /** 영화 장르 */
  genre: Scalars['String'];
  /** 영화 고유 아이디 */
  id: Scalars['Int'];
  /** 포스터 이미지 URL */
  posterImg: Scalars['String'];
  /** 개봉일 */
  release: Scalars['String'];
  /** 영화 러닝 타임, minute */
  runningTime: Scalars['Float'];
  /** 영화 부제목 */
  subtitle?: Maybe<Scalars['String']>;
  /** 영화 제목 */
  title: Scalars['String'];
};

/** 로그인 인풋 데이터 */
export type LoginInput = {
  emailOrUsername: Scalars['String'];
  password: Scalars['String'];
};

/** 로그인 반환 데이터 */
export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  login: LoginResponse;
  signUp: User;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationSignUpArgs = {
  signUpInput: SignUpInput;
};

export type PaginatedFilms = {
  __typename?: 'PaginatedFilms';
  cursor?: Maybe<Scalars['Int']>;
  films: Array<Film>;
};

export type Query = {
  __typename?: 'Query';
  cut?: Maybe<Cut>;
  cuts: Array<Cut>;
  film?: Maybe<Film>;
  films: PaginatedFilms;
};


export type QueryCutArgs = {
  cutId: Scalars['Int'];
};


export type QueryCutsArgs = {
  filmId: Scalars['Int'];
};


export type QueryFilmArgs = {
  filmId: Scalars['Int'];
};


export type QueryFilmsArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type SignUpInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  /** 생성 일자 */
  createdAt: Scalars['String'];
  /** 유저 이메일 */
  email: Scalars['String'];
  id: Scalars['Int'];
  /** 업데이트 일자 */
  updatedAt: Scalars['String'];
  /** 유저 이름 */
  username: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', accessToken?: string | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, username: string, email: string } | null } };

export type SignUpMutationVariables = Exact<{
  signUpInput: SignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'User', email: string, username: string, createdAt: string, updatedAt: string, id: number } };

export type CutQueryVariables = Exact<{
  cutId: Scalars['Int'];
}>;


export type CutQuery = { __typename?: 'Query', cut?: { __typename?: 'Cut', id: number, src: string, film?: { __typename?: 'Film', id: number, title: string } | null } | null };

export type CutsQueryVariables = Exact<{
  filmId: Scalars['Int'];
}>;


export type CutsQuery = { __typename?: 'Query', cuts: Array<{ __typename?: 'Cut', id: number, src: string }> };

export type FilmQueryVariables = Exact<{
  filmId: Scalars['Int'];
}>;


export type FilmQuery = { __typename?: 'Query', film?: { __typename?: 'Film', id: number, title: string, subtitle?: string | null, description: string, genre: string, runningTime: number, posterImg: string, release: string, director: { __typename?: 'Director', id: number, name: string } } | null };

export type FilmsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  cursor?: InputMaybe<Scalars['Int']>;
}>;


export type FilmsQuery = { __typename?: 'Query', films: { __typename?: 'PaginatedFilms', cursor?: number | null, films: Array<{ __typename?: 'Film', id: number, title: string, subtitle?: string | null, runningTime: number, release: string, posterImg: string, director: { __typename?: 'Director', name: string } }> } };


export const LoginDocument = gql`
    mutation login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    errors {
      field
      message
    }
    user {
      id
      username
      email
    }
    accessToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignUpDocument = gql`
    mutation signUp($signUpInput: SignUpInput!) {
  signUp(signUpInput: $signUpInput) {
    email
    username
    createdAt
    updatedAt
    id
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      signUpInput: // value for 'signUpInput'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const CutDocument = gql`
    query cut($cutId: Int!) {
  cut(cutId: $cutId) {
    id
    src
    film {
      id
      title
    }
  }
}
    `;

/**
 * __useCutQuery__
 *
 * To run a query within a React component, call `useCutQuery` and pass it any options that fit your needs.
 * When your component renders, `useCutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCutQuery({
 *   variables: {
 *      cutId: // value for 'cutId'
 *   },
 * });
 */
export function useCutQuery(baseOptions: Apollo.QueryHookOptions<CutQuery, CutQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CutQuery, CutQueryVariables>(CutDocument, options);
      }
export function useCutLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CutQuery, CutQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CutQuery, CutQueryVariables>(CutDocument, options);
        }
export type CutQueryHookResult = ReturnType<typeof useCutQuery>;
export type CutLazyQueryHookResult = ReturnType<typeof useCutLazyQuery>;
export type CutQueryResult = Apollo.QueryResult<CutQuery, CutQueryVariables>;
export const CutsDocument = gql`
    query cuts($filmId: Int!) {
  cuts(filmId: $filmId) {
    id
    src
  }
}
    `;

/**
 * __useCutsQuery__
 *
 * To run a query within a React component, call `useCutsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCutsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCutsQuery({
 *   variables: {
 *      filmId: // value for 'filmId'
 *   },
 * });
 */
export function useCutsQuery(baseOptions: Apollo.QueryHookOptions<CutsQuery, CutsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CutsQuery, CutsQueryVariables>(CutsDocument, options);
      }
export function useCutsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CutsQuery, CutsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CutsQuery, CutsQueryVariables>(CutsDocument, options);
        }
export type CutsQueryHookResult = ReturnType<typeof useCutsQuery>;
export type CutsLazyQueryHookResult = ReturnType<typeof useCutsLazyQuery>;
export type CutsQueryResult = Apollo.QueryResult<CutsQuery, CutsQueryVariables>;
export const FilmDocument = gql`
    query film($filmId: Int!) {
  film(filmId: $filmId) {
    id
    title
    subtitle
    description
    genre
    runningTime
    posterImg
    release
    director {
      id
      name
    }
  }
}
    `;

/**
 * __useFilmQuery__
 *
 * To run a query within a React component, call `useFilmQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilmQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilmQuery({
 *   variables: {
 *      filmId: // value for 'filmId'
 *   },
 * });
 */
export function useFilmQuery(baseOptions: Apollo.QueryHookOptions<FilmQuery, FilmQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilmQuery, FilmQueryVariables>(FilmDocument, options);
      }
export function useFilmLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilmQuery, FilmQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilmQuery, FilmQueryVariables>(FilmDocument, options);
        }
export type FilmQueryHookResult = ReturnType<typeof useFilmQuery>;
export type FilmLazyQueryHookResult = ReturnType<typeof useFilmLazyQuery>;
export type FilmQueryResult = Apollo.QueryResult<FilmQuery, FilmQueryVariables>;
export const FilmsDocument = gql`
    query Films($limit: Int, $cursor: Int) {
  films(limit: $limit, cursor: $cursor) {
    cursor
    films {
      id
      title
      subtitle
      runningTime
      director {
        name
      }
      release
      posterImg
    }
  }
}
    `;

/**
 * __useFilmsQuery__
 *
 * To run a query within a React component, call `useFilmsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilmsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilmsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useFilmsQuery(baseOptions?: Apollo.QueryHookOptions<FilmsQuery, FilmsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilmsQuery, FilmsQueryVariables>(FilmsDocument, options);
      }
export function useFilmsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilmsQuery, FilmsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilmsQuery, FilmsQueryVariables>(FilmsDocument, options);
        }
export type FilmsQueryHookResult = ReturnType<typeof useFilmsQuery>;
export type FilmsLazyQueryHookResult = ReturnType<typeof useFilmsLazyQuery>;
export type FilmsQueryResult = Apollo.QueryResult<FilmsQuery, FilmsQueryVariables>;