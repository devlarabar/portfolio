import '@/styles/globals.css'
import '@/styles/stars.css'
import { Inter } from 'next/font/google'
import ToggleThemeProvider from '@/contexts/ThemeContext/useProvideTheme'
import ThemeToggle from '@/components/ui/ThemeToggle'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Navigation from '@/components/ui/Navigation'
import ProgressIndicator from '@/components/ui/ProgressIndicator'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Lara S.A. - Software Developer',
	description: 'Full-Stack Software Developer, Game Developer, and Artist',
	icons: [{ rel: 'icon', url: '/assets/images/favicon.ico' }],
}

const RootLayout = ({ children, modal }) => {
	return (
		<html lang="en">
			<body className={inter.className}>
				{/* Hidden form for Netlify Forms detection at build time */}
				<form name="contact" netlify="true" netlify-honeypot="bot-field" hidden>
					<input type="hidden" name="form-name" value="contact" />
					<input type="text" name="name" />
					<input type="email" name="email" />
					<textarea name="message"></textarea>
					<input type="hidden" name="subject" />
					<input name="bot-field" />
				</form>
				
				<ToggleThemeProvider>
					<ProgressIndicator />
					<Navigation ThemeToggle={ThemeToggle} />
					<div className="stars-container">
						<div id="stars"></div>
						<div id="stars2"></div>
						<div id="stars3"></div>
					</div>
					<main>
						{children}
					</main>
					<Footer />
				</ToggleThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
