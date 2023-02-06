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

export type Director = {
  __typename?: 'Director';
  id: Scalars['Int'];
  name: Scalars['String'];
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

export type PaginatedFilms = {
  __typename?: 'PaginatedFilms';
  cursor?: Maybe<Scalars['Int']>;
  films: Array<Film>;
};

export type Query = {
  __typename?: 'Query';
  film?: Maybe<Film>;
  films: PaginatedFilms;
};


export type QueryFilmArgs = {
  filmId: Scalars['Int'];
};


export type QueryFilmsArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type FilmQueryVariables = Exact<{
  filmId: Scalars['Int'];
}>;


export type FilmQuery = { __typename?: 'Query', film?: { __typename?: 'Film', id: number, title: string, subtitle?: string | null, description: string, genre: string, runningTime: number, posterImg: string, release: string, director: { __typename?: 'Director', id: number, name: string } } | null };

export type FilmsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  cursor?: InputMaybe<Scalars['Int']>;
}>;


export type FilmsQuery = { __typename?: 'Query', films: { __typename?: 'PaginatedFilms', cursor?: number | null, films: Array<{ __typename?: 'Film', id: number, title: string, subtitle?: string | null, runningTime: number, release: string, posterImg: string, director: { __typename?: 'Director', name: string } }> } };


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