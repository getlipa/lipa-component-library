export default function SecondaryButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
	return (
		<button
			type="button"
			className="hidden rounded-md bg-gray-100 px-2.5 py-1.5 text-sm font-semibold text-grey-950 hover:bg-grey-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-100 sm:block"
			onClick={() => onClick()}
		>
			{children}
		</button>
	);
}
