import * as CANNON from 'cannon-es';

export const world = new CANNON.World({
  gravity: new CANNON.Vec3(0, -9.82, 0),
});

world.broadphase = new CANNON.SAPBroadphase(world);
// world.allowSleep = true;

const defaultMaterial = new CANNON.Material('default');
const contactMaterial = new CANNON.ContactMaterial(
  defaultMaterial,
  defaultMaterial,
  {
    friction: 1,
    restitution: 0.3,
  }
);
world.defaultContactMaterial = contactMaterial;
