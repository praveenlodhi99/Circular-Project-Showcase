# PROJECT SETUP

## Installing Three.js Packages

To set up the necessary packages for Three.js in your project, run the following command in your terminal:

```bash
npm install @react-three/drei @react-three/fiber @react-three/postprocessing @types/three gsap three
```

- `@react-three/drei`: A collection of helpers, abstractions, and utilities specifically designed for React Three Fiber. It includes ready-made components like cameras, controls, geometries, and lights, making it easier to build complex 3D scenes without having to write boilerplate code.

- `@react-three/fiber`: A React renderer for Three.js, enabling you to use Three.js in a declarative, component-based manner. It abstracts away the imperative API of Three.js and allows you to build and manage 3D scenes using React components, enhancing readability and maintainability.

- `@react-three/postprocessing`: A React integration for the postprocessing library, which provides a wide array of post-processing effects like Bloom, Depth of Field, and SSAO. This package simplifies the application of visual effects to your Three.js scenes, allowing you to create more immersive and visually appealing experiences.

- `@types/three`: TypeScript type definitions for the Three.js library. These typings ensure that your TypeScript code can utilize the Three.js library with full type safety, improving development productivity and reducing the likelihood of runtime errors.

- `gsap`: The GreenSock Animation Platform (GSAP) is a robust and performance-optimized animation library. It is often used in conjunction with Three.js to create fluid and dynamic animations, such as animating 3D objects, camera movements, and other visual transitions within your 3D scenes.

- `three`: The core Three.js library, which provides the fundamental tools for creating and rendering 3D graphics in the browser. This library includes a wide range of features, such as geometries, materials, lights, cameras, and more, that form the backbone of any Three.js-based 3D application.
