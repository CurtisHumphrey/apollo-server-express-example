---
to: src/graphql/<%=name%>/typeDefs.js
---
<%
 CapitalName = h.inflection.capitalize(name)
 SingularCapitalName = h.inflection.singularize(CapitalName)
%>
const { gql } = require('apollo-server')

const typeDefs = gql`
  type <%=SingularCapitalName%> {
    id: ID!
    createdAt: String! @formattableDate
    updatedAt: String! @formattableDate
  }

  extend type Query {
      
  }
`

module.exports = typeDefs
