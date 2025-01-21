//! THIS IS FAKE GRAPHQL API FOR TESTING PURPOSE

import { tagTypes } from '../tag-types'
import { baseAPI } from './baseApi'

export const fakeApi = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    //** Getting Countries Info */
    getCountries: build.query({
      query: () => ({
        url: ``,
        method: 'POST',
        body: {
          query: `
          query {
  countries {
    code
    name
    continent {
      name
    }
  }
}

                `,
        },
      }),
      providesTags: [tagTypes.fakeAPI],
    }),
  }),
})

export const { useGetCountriesQuery } = fakeApi
