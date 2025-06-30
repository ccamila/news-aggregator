export default function Footer() {
  return(
    <footer className="footer footer-horizontal footer-center bg-neutral text-primary-content p-10">
  <aside>
    <p className="font-bold">
      News Aggregator
      <br />
      Stay updated with the latest news from multiple sources in one place.
    </p>
    <p><a target="_blank" href="https://icons8.com/icon/9981/news">News</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
</footer>
  )
} 