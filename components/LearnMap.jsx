
export const LearnMap = () => {
    const items = ['item 1', 'item 2', 'item 3', 'item 4' ]
  return (
    <>
    <ul>
        {
            items.map((item, i) => (
                <li key={i}>{i} --- {item}</li>
            ))
        }
    </ul>
    </>

  )
}
