const data = {
  menuMain: [
    { id: 1, name: 'All products', url: '/catalog' },
    { id: 2, name: 'About seedra', url: '/about' },
    { id: 3, name: 'Our blog', url: '/blog' },
    { id: 4, name: 'Contacts', url: '/contacts' }
  ],
  menuSocial: [
    { id: 1, name: 'instagram', url: 'https://www.instagram.com' },
    { id: 2, name: 'facebook', url: 'https://www.facebook.com' }
  ],
  menuFootLeft: [
    { id: 1, name: 'All products', url: '/catalog' },
    { id: 2, name: 'About seedra', url: '/about' },
    { id: 3, name: 'Our blog', url: '/blog' },
  ],
  menuFootRight: [
    { id: 1, name: 'Terms&Conditions', url: '/terms' },
    { id: 2, name: 'Privacy Policy', url: '/privacy' },
  ]
}

const request = response = data;

module.exports = {
  request,
  response
}