import Head from "next/head";
import Login from "../../components/Commons/Login";
import Dashboard from "../../components/AdminComponents/Dashboard";
import {useState} from "react";
function Admin() {
  const [session, setSession] = useState(false);
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      {!session ? (
        <Login which="Administrator" session={session} setSession={setSession} />
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default Admin;
