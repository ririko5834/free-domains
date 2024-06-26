addSubDomain({
    description: 'Subdomain personal website, projects and email forwarding',
    domain: 'is-an.app',
    subdomain: 'anmail',
    owner: {
      email: 'wolfo89+anmail@protonmail.com',
    },
    record: {
        "A": ["167.235.217.200"],
        "MX": ["d6e7a7cf4aef5fca.mx2.emailprofi.seznam.cz", "d6e7a7cf4aef5fca.mx1.emailprofi.seznam.cz"],
        "TXT": ["v=spf1 include:spf.seznam.cz ~all"]
        },
    proxy: false
  })
