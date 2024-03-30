// for more details watch the file `./domains.d.ts`

addSubDomain({
  description: 'Website for my geocache', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'xwg-xchange-geocache', // desired subdomain name
  owner: {
    repo: '',
    email: 'xwg.xchange+subdomain@gmail.com',
  },
  record: {
    CNAME: 'web-1.hostnow.cz'

  },
  //proxy: false, // disable Cloudflare proxy (with is enabled by default). In this case, your origin server
                  // should provide valid a SSL certificate and protection CF will be disabled
  // nested: [{ // in addition, you may define the required nested subdomains
  //   subdomain: 'foo',
  //   record: {
  //     CNAME: '...',
  //   },
  //   proxy: false,
  // }, {
  //   subdomain: 'bar',
  //   record: {
  //     A: ['...'],
  //   },
  //   proxy: true,
  // }]
})
