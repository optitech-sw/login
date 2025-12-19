import Link from 'next/link';
import Image from 'next/image';
import { Form } from 'app/form';
import { redirect } from 'next/navigation';
import { createUser, getUser } from 'app/db';
import { SubmitButton } from 'app/submit-button';

export default function Login() {
  async function register(formData: FormData) {
    'use server';
    let email = formData.get('email') as string;
    let password = formData.get('password') as string;
    let user = await getUser(email);

    if (user.length > 0) {
      return 'User already exists'; // TODO: Handle errors with useFormStatus
    } else {
      await createUser(email, password);
      redirect('/login');
    }
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center" style={{backgroundColor: '#f5f7f0'}}>
      <div className="z-10 w-full max-w-md">
        <div className="flex flex-col items-center justify-center space-y-6 bg-gray-50 px-4 py-8 sm:px-12">
          <div className="mb-4">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={190}
              height={190}
              className="w-48 h-48"
            />
          </div>
          <h3 className="text-2xl font-normal text-gray-900">Create account</h3>
        </div>
        <Form action={register}>
          <div className="pt-2">
            <SubmitButton>Create account</SubmitButton>
          </div>
          <div className="pt-4">
            <p className="text-center text-sm text-gray-700">
              {'Already have an account? '}
              <Link href="/login" className="text-blue-600 hover:underline">
                Sign in instead
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}
