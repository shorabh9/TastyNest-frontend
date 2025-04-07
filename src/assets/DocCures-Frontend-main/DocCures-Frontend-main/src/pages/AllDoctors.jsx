import React from 'react';
import DocList from '../components/DocList';
import { Link, NavLink, useParams } from 'react-router-dom';

function AllDoctors() {
  const { speciality } = useParams();

  const activeLink = "text-primary font-bold md:w-full flex flex-row gap-3 items-center text-[19px] lg:text-[22px] w-auto cursor-pointer bg-white px-4 py-3 shadow-md shadow-darkGray rounded-2xl hover:text-primary transition-all hover:shadow-[#9f9fe9] whitespace-nowrap "

  // Inactive Link
  const inactiveLink = "text-textp flex flex-row items-center text-[17px] md:text-[19px] lg:text-[21px] gap-3 w-auto md:w-full px-4 py-3 rounded-2xl font-semibold cursor-pointer hover:text-black hover:bg-white hover:rounded-2xl hover:px-2 hover:text-[20px] transition-all hover:shadow-[#9f9fe9] hover:shadow-md border whitespace-nowrap "



  return (
    <div className='w-full lg:w-[80%] h-full flex flex-col items-center'>
      <div className='w-full px-4'>
        <h2 className='text-textp w-full text-center bg-white rounded-2xl py-3 md:text-2xl font-semibold mt-6'>Browse Doctors by <span className='text-primary font-bold'>Specialisation</span></h2>
      </div>
      <div className='md:mt-5 w-full flex flex-col md:flex-row items-center md:items-start'>
        <div className='w-full md:w-[30%] md:min-w-[250px] md:max-w-[400px] p-3  mt-3'>
          <ul className='w-full overflow-scroll no-scrollbar md:overflow-auto flex md:flex-col gap-4 bg-white rounded-2xl p-3 py-5 shadow-lg shadow-darkGray'>
            <NavLink
              to="/alldoctors/General Physician"
              className={({ isActive }) =>
                isActive ? activeLink : inactiveLink
              }>
              General Physician
            </NavLink>
            <NavLink
              to="/allDoctors/Neurologist"
              className={({ isActive }) =>
                isActive ? activeLink : inactiveLink
              }>
              Neurologist
            </NavLink>
            <NavLink
              to="/allDoctors/Gynecologist"
              className={({ isActive }) =>
                isActive ? activeLink : inactiveLink
              }>
              Gynecologist
            </NavLink>
            <NavLink
              to="/allDoctors/Pediatricians"
              className={({ isActive }) =>
                isActive ? activeLink : inactiveLink
              }>
              Pediatricians
            </NavLink>
            <NavLink
              to="/allDoctors/Gastroenterologist"
              className={({ isActive }) =>
                isActive ? activeLink : inactiveLink
              }>
              Gastroenterologist
            </NavLink>
            <NavLink
              to="/allDoctors/Dermatologist"
              className={({ isActive }) =>
                isActive ? activeLink : inactiveLink
              }>
              Dermatologist
            </NavLink>
          </ul>
        </div>
        <div className='md:w-[70%] overflow-visible no-scrollbar'>
          <DocList isHomePage={false} speciality={speciality} />
        </div>
      </div>
    </div>
  );
}

export default AllDoctors;
