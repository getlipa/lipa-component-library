export default function DangerButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
	return (
		<button
			type="button"
			className="hidden rounded-md bg-lipa-danger-600 px-2.5 py-1.5 text-sm font-semibold text-white-700 hover:bg-lipa-danger-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lipa-danger-600 sm:block"
			onClick={() => onClick()}
		>
			{children}
		</button>
	);
}
