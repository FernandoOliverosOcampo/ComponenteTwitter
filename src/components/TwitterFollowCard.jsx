import { useState } from "react"

export function TwitterFollowCard({userName, name, initialIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const imgSrc = `https://unavatar.io/${userName}`

    const buttonText = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const formatUserName = (userName) => `@${userName}`
    return (
        <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img 
          className="tw-followCard-img"
          alt="El avatar de Midudev"
          src={imgSrc}
          />
          < div className="tw-followCard-info">
            <strong>{name}</strong>
            <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
          </div>
        </header>
  
        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            <span className="tw-followCard-text">{buttonText}</span>
            <span className="tw-followCard-stopFollow">Dejar de seguir</span>
          </button>
        </aside>
      </article>
    )
    
}