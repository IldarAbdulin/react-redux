import React from 'react';
import { FilterBtn } from './FilterBtn';

export const Filter = ({ activeFilter, setFilter }) => {
  return (
    <div className="btns">
      <FilterBtn
        to="/all"
        onClick={() => setFilter('all')}
        style={{
          color: activeFilter === 'all' ? 'white' : 'black',
          textDecoration: 'none',
          background: activeFilter === 'all' ? 'black' : 'white',
          border:
            activeFilter === 'all' ? '1px solid white' : '1px solid black',
          borderRadius: '10px',
          padding: '5px 10px',
          margin: '0 10px',
        }}
      >
        all
      </FilterBtn>
      <FilterBtn
        to="/active"
        onClick={() => setFilter('active')}
        style={{
          color: activeFilter === 'active' ? 'white' : 'black',
          textDecoration: 'none',
          background: activeFilter === 'active' ? 'black' : 'white',
          border:
            activeFilter === 'active' ? '1px solid white' : '1px solid black',
          borderRadius: '10px',
          padding: '5px 10px',
          margin: '0 10px',
        }}
      >
        active
      </FilterBtn>
      <FilterBtn
        to="/completed"
        onClick={() => setFilter('completed')}
        style={{
          color: activeFilter === 'completed' ? 'white' : 'black',
          background: activeFilter === 'completed' ? 'black' : 'white',
          textDecoration: 'none',
          border:
            activeFilter === 'completed'
              ? '1px solid white'
              : '1px solid black',
          borderRadius: '10px',
          padding: '5px 10px',
          margin: '0 10px',
        }}
      >
        completed
      </FilterBtn>
    </div>
  );
};
