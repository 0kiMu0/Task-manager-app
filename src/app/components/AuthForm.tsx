'use client';

import React, { useState } from "react";

interface AuthFormProps{
    type:'login'|'register';
}

export default function AuthForm({type}: AuthFormProps){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();

        if(type === 'register'){
            if(password !== confirmPassword){
                alert('Passwords do not match!');
                return;
            }
            console.log('REGISTER =>',{
                firstName,
                lastName,
                birthDate,
                gender,
                email,
                password
            });
        } else{
            console.log('LOGIN =>', {email,password});
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">
              {type === 'login' ? 'Login' : 'Register'}
            </h2>
    
           {type === 'register' && (
                <>
                    <input
                    type="text"
                    placeholder="First name"
                    className="w-full mb-4 p-3 border border-gray-300 rounded-md"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    />
                    <input
                    type="text"
                    placeholder="Last name"
                    className="w-full mb-4 p-3 border border-gray-300 rounded-md"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    />
                    <input
                    type="date"
                    className="w-full mb-4 p-3 border border-gray-300 rounded-md"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    required
                    />

                    <div className="mb-4">
                        <label className="block mb-2 text-sm text-gray-700">Gender</label>
                        <div className="flex items-center gap-4">
                            <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                onChange={(e) => setGender(e.target.value)}
                                required
                            />
                            <span className="ml-2">Male</span>
                            </label>
                            <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                onChange={(e) => setGender(e.target.value)}
                                required
                            />
                            <span className="ml-2">Female</span>
                            </label>
                        </div>
                    </div>
                </>
            )}

            <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />

            <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-3 border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />

            {type === 'register' && (
            <input
                type="password"
                placeholder="Confirm password"
                className="w-full mb-4 p-3 border border-gray-300 rounded-md"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
            )}

            <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
            >
            {type === 'login' ? 'Login' : 'Register'}
            </button>

            {type === 'login' && (
            <p className="mt-4 text-center text-sm text-gray-600">
                Not registered?{' '}
                <a
                href="/register"
                className="text-blue-600 hover:underline font-medium"
                >
                Register
                </a>
            </p>
            )}
            {type === 'register' && (
            <p className="mt-4 text-center text-sm text-gray-600">
                Already have an account?{' '}
                <a
                href="/login"
                className="text-blue-600 hover:underline font-medium"
                >
                Login
                </a>
            </p>
            )}
          </form>
        </div>
    );
}