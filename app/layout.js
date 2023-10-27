import '@/styles/globals.css'
import '@/styles/stars.css'
import { Inter } from 'next/font/google'
import ToggleThemeProvider from '@/contexts/ThemeContext/useProvideTheme'
import ThemeToggle from '@/components/ui/ThemeToggle'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Favicon from '@/public/assets/images/favicon.ico'
import Navigation from '@/components/ui/Navigation'
import ProgressIndicator from '@/components/ui/ProgressIndicator'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Lara Alexander',
	description: 'Software developer portfolio',
	icons: [{ rel: 'icon', url: Favicon.src }],
}

const RootLayout = ({ children, modal }) => {
	return (
		<html lang="en">
			<body className={inter.className}>
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
