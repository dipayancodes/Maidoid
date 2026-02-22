import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { Layout } from './layout'
import { HomePage } from './pages/home'
import { TechnologyPage } from './pages/technology'
import { ProductPage } from './pages/product'
import { AboutPage } from './pages/about'
import { CareersPage } from './pages/careers'
import { ContactPage } from './pages/contact'

const app = new Hono()

// CORS for API routes
app.use('/api/*', cors())

// --- Pages ---

app.get('/', (c) => {
  const content = HomePage()
  return c.html(Layout({ title: 'Maidoid Company Ltd. | Human Intelligence. Engineered.', children: content, currentPath: '/' }))
})

app.get('/technology', (c) => {
  const content = TechnologyPage()
  return c.html(Layout({ title: 'Technology | Maidoid Company Ltd.', children: content, currentPath: '/technology' }))
})

app.get('/product', (c) => {
  const content = ProductPage()
  return c.html(Layout({ title: 'Maidoid One | Maidoid Company Ltd.', children: content, currentPath: '/product' }))
})

app.get('/about', (c) => {
  const content = AboutPage()
  return c.html(Layout({ title: 'About | Maidoid Company Ltd.', children: content, currentPath: '/about' }))
})

app.get('/careers', (c) => {
  const content = CareersPage()
  return c.html(Layout({ title: 'Careers | Maidoid Company Ltd.', children: content, currentPath: '/careers' }))
})

app.get('/contact', (c) => {
  const content = ContactPage()
  return c.html(Layout({ title: 'Contact | Maidoid Company Ltd.', children: content, currentPath: '/contact' }))
})

// --- API ---

app.post('/api/contact', async (c) => {
  try {
    const body = await c.req.json()
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
      return c.json({ success: false, error: 'All fields are required.' }, 400)
    }

    // In production, this would send an email or store in a database
    // For now, acknowledge receipt
    return c.json({
      success: true,
      message: 'Your message has been received. We will respond within 48 hours.'
    })
  } catch (e) {
    return c.json({ success: false, error: 'Invalid request.' }, 400)
  }
})

app.get('/api/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() })
})

export default app
