// Get the current year dynamically
const currentYear = new Date().getFullYear()

// Updated footerLinksData with both dynamic translations and static values
export const footerLinksData = [
  {
    title: 'footer.linksData.quickLinks.title', // dynamic translation key
    links: [
      {
        name: 'footer.linksData.quickLinks.links.allSports', // dynamic translation key
        href: '/all-sports',
        isClicked: true,
      },
      {
        name: 'footer.linksData.quickLinks.links.liveSports',
        href: '/live-sports',
        isClicked: true,
      },
      {
        name: 'footer.linksData.quickLinks.links.allCasino',
        href: '/all-casino',
        isClicked: true,
      },
      {
        name: 'footer.linksData.quickLinks.links.liveCasino',
        href: '/live-casino',
        isClicked: true,
      },
      {
        name: 'footer.linksData.quickLinks.links.games',
        href: '/games',
        isClicked: true,
      },
    ],
  },
  {
    title: 'footer.linksData.usefulLinks.title',
    links: [
      {
        name: 'footer.linksData.usefulLinks.links.termsOfService',
        href: '/terms-of-service',
        isClicked: true,
      },
      {
        name: 'footer.linksData.usefulLinks.links.antiMoneyLaundering',
        href: '/anti-money-laundering',
        isClicked: true,
      },
      {
        name: 'footer.linksData.usefulLinks.links.kycPolicies',
        href: '/kyc-policies',
        isClicked: true,
      },
      {
        name: 'footer.linksData.usefulLinks.links.privacyManagement',
        href: '/privacy-management',
        isClicked: true,
      },
      {
        name: 'footer.linksData.usefulLinks.links.accountsPayoutsBonus',
        href: '/accounts-payout-bonus',
        isClicked: true,
      },
    ],
  },
  {
    title: 'footer.linksData.companyInfo.title', // dynamic translation key
    companyInfo: true,
    links: [
      {
        name: 'footer.linksData.companyInfo.links.launchingYear', // dynamic translation key
        href: '#',
        staticValue: currentYear.toString(), // dynamic value for launching year
        isClicked: false,
      },
      {
        name: 'footer.linksData.companyInfo.links.country',
        href: '#',
        staticValue: 'UAE', // static value for country
        isClicked: false,
      },
      {
        name: 'footer.linksData.companyInfo.links.owner',
        href: '#',
        staticValue: 'ABC', // static value for owner
        isClicked: false,
      },
      {
        name: 'footer.linksData.companyInfo.links.license',
        href: '#',
        staticValue: 'LI8592024', // static value for license
        isClicked: false,
      },
      {
        name: 'footer.linksData.companyInfo.links.licenseYear',
        href: '#',
        staticValue: currentYear.toString(), // dynamic value for license year
        isClicked: false,
      },
    ],
  },
]
