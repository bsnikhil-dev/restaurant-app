export default function MealsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <main>
                <h1>Meals Layout</h1>
                {children}
            </main>
        </div>
    );
}