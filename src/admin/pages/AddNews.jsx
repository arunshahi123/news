import axios from 'axios'
import NewsForm from '../components/NewsForm'

export default function AllNews() {
  const publishNews = async (form) => {
    try {
      await axios.post('http://localhost:5000/api/news', form)
      alert('News Published Successfully')
    } catch (err) {
      console.error(err)
      alert('Failed to Publish')
    }
  }

  return (
    <div className="max-w-full">
      <h1 className="text-3xl font-bold mb-4">All News</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Add News</h2>
        <NewsForm onSubmit={publishNews} />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">News List</h2>
        <p className="text-gray-500">(Existing news list will render here.)</p>
      </section>
    </div>
  )
}