export default async function ({ $auth, redirect }) {
    if ($auth?.user?.type !== 1) {
            return redirect("/admin/");
    }
  }