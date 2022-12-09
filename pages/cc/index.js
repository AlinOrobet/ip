import Head from "next/head";
import Login from "../../components/Commons/Login";
import Dashboard from "../../components/CcComponents/Dashboard";
import {useState} from "react";
function Cc() {
  const [session, setSession] = useState(false);
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      {!session ? (
        <Login which="Creator Continut" session={session} setSession={setSession} />
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default Cc;
