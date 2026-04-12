// HOMEPAGE ROUTE (URL: / )
// Pages act as huge Organisms or Templates. They compose Organisms together.

import UserListContainer from '../features/users/containers/UserListContainer';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-2">Welcome Home</h1>
        <p className="text-gray-600 mb-6">Here is a list of users fetched from the backend:</p>

        {/* We drop our smart Container in here */}
        <UserListContainer />
      </section>
    </div>
  );
}
