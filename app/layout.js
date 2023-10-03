import './globals.css'
import { Inter } from 'next/font/google'
import ToggleThemeProvider from '@/contexts/ThemeContext/useProvideTheme'
import ThemeToggle from '@/components/ui/ThemeToggle'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Favicon from '@/public/assets/images/favicon.ico';

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
					<Header ThemeToggle={ThemeToggle} />
					<main className="content">
						{children}
					</main>
					<Footer />
				</ToggleThemeProvider>
			</body>
		</html>
	)
}
