export default function({ $gtm, route }) {
  $gtm.init(process.env.GTM_ID)
}