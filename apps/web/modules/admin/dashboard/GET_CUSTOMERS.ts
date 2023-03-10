import { gql } from '@apollo/client'

export const GET_CUSTOMERS = gql`
  query totalCustomers($where: CustomerWhereInput) {
    totalCustomers(where: $where) {
      count
    }
  }
`
