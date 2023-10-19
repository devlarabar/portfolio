import '../styles/globals.css'
import '../styles/stars.css'
import { Inter } from 'next/font/google'
import ToggleThemeProvider from '@/contexts/ThemeContext/useProvideTheme'
import ThemeToggle from '@/components/ui/ThemeToggle'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Favicon from '@/public/assets/images/favicon.ico'
import Navigation from '@/components/ui/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Lara Alexander',
	description: 'Software developer portfolio',
	icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ToggleThemeProvider>
					<Navigation ThemeToggle={ThemeToggle} />
					<div class="stars-container">
						<div id="stars"></div>
						<div id="stars2"></div>
						<div id="stars3"></div>
					</div>
					<main className="content">
						{children}
					</main>
					<Footer />
				</ToggleThemeProvider>
			</body>
		</html>
	)
}
