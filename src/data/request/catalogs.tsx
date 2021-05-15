import client from "@/graphql/client";
import {GetCatalogsQuery, } from "@/graphql/generated/graphql";
import {GET_CATALOGS} from "@/graphql/queries";
import { sortByDate } from "@/utils/date";

export const getCatalogs = async (first?: number) => {
  const {catalogs} = await client.request<GetCatalogsQuery>(GET_CATALOGS, {first: first || 9});
  const sortedCatalog = sortByDate(catalogs, "releaseDate");
  return sortedCatalog.map(catalog => {
    return {
      id: catalog.id,
      name: catalog.name,
      url: catalog.url,
      releaseDate: catalog.releaseDate,
      partner: {
        logo: catalog.partner?.logo?.url,
        name: catalog.partner?.name
      }
    }
  })
};



