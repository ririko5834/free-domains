
addSubDomain({
  description: 'Persoanl email service forwarding', // describe your project in this field
  domain: 's-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'foxmail', // desired subdomain name
  owner: {
    repo: 'https://github.com/ririko5834',
    email: 'wolfo89+anmail@protonmail.com',
  },
  record: {
    NS: ['ns1.zilore.net', 'ns2.zilore.net'],
  },
  proxy: false
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
