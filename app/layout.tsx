import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		template: '%s | Acme Dashboard',
		default: 'Acme Dashboard',
	},
	description: 'Learn Dashboard built with App Router.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={`${inter.className} antialiased overflow-y-auto overflow-x-hidden`}
			>
				{children}
			</body>
		</html>
	);
}
