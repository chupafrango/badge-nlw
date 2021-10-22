const linksSocialMedia = {
  github: 'chupafrango',
  youtube: 'CTp199AM5D6lDhQ_rrhoDuw',
  facebook: 'larissa.barreto.5477272',
  instagram: 'larissa_bmo',
  twitter: 'Deverastriste_'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProilesInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      bioGitHub.textContent = data.bio
      gitHubLink.href = data.html_url
      imageGitHub.src = data.avatar_url
      gitHubLogin.textContent = data.login
    })
}

getGitHubProilesInfos()
