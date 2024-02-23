import React from 'react';

export default function Slug({ params }) {
  return (
    <div>
      <h1>This is {params.slug} page</h1>
    </div>
  );
}
