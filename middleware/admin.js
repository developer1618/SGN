export default async function ({ $auth, redirect }) {
    if ($auth?.user?.type !== 0) {
            return redirect("/consultant/");
    }
  }