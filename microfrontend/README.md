# Angular Micro-Frontend Example (Shell + MFE1)

This project demonstrates an **end-to-end micro-frontend setup** using Angular and Webpack Module Federation, with the following architecture:

- **Shell App** – acts as the host/container
- **MFE1** – a standalone component exposed and loaded remotely

---

## Getting Started

### Install Dependencies

For both apps, run:

```bash
npm install
```

Run the Apps
In separate terminals:

1️⃣ Run MFE1 (Remote App)

```bash
cd mfe1
ng serve --port 4201
```

2️⃣ Run Shell (Host App)

```bash
cd shell
ng serve --port 4200
```

## How It Works

📍 Shell Routing
In the shell, routing is defined to lazy-load a standalone component from MFE1 using loadRemoteModule:

```bash
{
  path: 'mfe1',
  loadComponent: () =>
    loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Component',
    }).then(m => m.AppComponent)
}
```

## MFE1 Exposure

In mfe1/module-federation.config.js, we expose a standalone Angular component:

```bash
exposes: {
  './Component': './src/app/app.component.ts',
}
```

The exposed component must be marked as standalone:

```bash
@Component({
  standalone: true,
  ...
})
export class AppComponent {}
```

## Try It Out

- Navigate to http://localhost:4200/mfe1
- The shell will dynamically load and render the component from MFE1
- You should see: Hello from MFE1 👋

## Tools & Libraries

- Angular CLI
- Webpack Module Federation
- @angular-architects/module-federation
