// cv.lingxiao.io → the CV on minmax.page; every other host serves the site.
export const onRequest = ({ request, next }) =>
  new URL(request.url).hostname === "cv.lingxiao.io"
    ? Response.redirect("https://minmax.page/lingxiao", 301)
    : next();
