import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <img src="https://binarycdn.b-cdn.net/retrowave-border.png"/>
        <p>
          <ul>
            {Object.entries(links).map(([text, link]) => (
              <li>
                <a href={link}>{text}</a>
              </li>
            ))}
          </ul>  

          <a href="https://xn--sr8hvo.ws/previous">  ←</a>
          <a href="https://xn--sr8hvo.ws">IndieWeb Webring</a>
          <a href="https://xn--sr8hvo.ws/next">→ </a>

        </p> 
        
         
        
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor

// {i18n(cfg.locale).components.footer.createdWith}{" "} <a href="https://quartz.jzhao.xyz/">Quartz</a> © {year}