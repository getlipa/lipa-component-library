export default function PrimaryButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
	return (
		<button
			type="button"
			className="hidden rounded-md bg-petrol-600 px-2.5 py-1.5 text-sm font-semibold text-white-700 hover:bg-petrol-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol-600 sm:block"
			onClick={() => onClick()}
		>
			{children}
		</button>
	);
}
