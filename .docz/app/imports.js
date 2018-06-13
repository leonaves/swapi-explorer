export const imports = {
  'src/components/PaginatedList/docz.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-paginated-list-docz" */ 'src/components/PaginatedList/docz.mdx'),
  'src/components/ResourceCard/docz.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-resource-card-docz" */ 'src/components/ResourceCard/docz.mdx'),
}
