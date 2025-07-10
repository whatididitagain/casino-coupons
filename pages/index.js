import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [tips, setTips] = useState([])

  useEffect(() => {
    axios.get(`${process.env.STRAPI_API_URL}/api/tips?populate=*`)
      .then(res => setTips(res.data.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1>Статьи</h1>
      {tips.map(tip => (
        <div key={tip.id}>
          <h2>{tip.attributes.title}</h2>
          <p>{tip.attributes.content}</p>
        </div>
      ))}
    </div>
  )
}
