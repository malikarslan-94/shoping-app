import Head from "next/head";
import "./styles.css";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Shop</title>
        {/* <link rel="shortcut icon" href="/static/favicon.ico" /> */}
        {/* <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
          !function (g, s, q, r, d) {
            r = g[r] = g[r] || function () { (r.q = r.q || []).push(arguments) };
            d = s.createElement(q); d.src = '//d1l6p2sc9645hc.cloudfront.net/gosquared.js'; q =
                s.getElementsByTagName(q)[0]; q.parentNode.insertBefore(d, q)
        }(window, document
            , 'script', '_gs');
    _gs("GSN-660931-Z");
    _gs('set', 'anonymizeIP', true);
    _gs('set', 'trackLocal', true);
        `,
          }}
        /> */}
        {/* <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
                    var ps_config = {
                        workspace_id : "956e0d6c-e962-4e65-8e37-290d299526ee"}`,
          }}
        /> */}
        {/* <script
          type="text/javascript"
          src="https://cdn.productstash.io/js/widget.min.js?v=0.3"
          defer="defer"
        ></script>
        <script src="https://forms.gosquared.com/forms.js" async></script> */}

      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
