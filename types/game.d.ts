import { ObjectMap, Seq } from './struct';
export interface GameOverData {
    get gameTime(): number;
    get allPlayerList(): Seq<string>;
    get winPlayerList(): Seq<string>;
    get mapName(): string;
    get playerData(): ObjectMap<string, ObjectMap<string, number>>;
    get replayName(): string;
}
export type GameCommandActions = 'move' | 'attack' | 'build' | 'repair' | 'loadInto' | 'unloadAt' | 'reclaim' | 'attackMove' | 'loadup' | 'patrol' | 'guard' | 'guardAt' | 'touchTarget' | 'follow' | 'triggerAction' | 'triggerActionWhenInRange' | 'setPassiveTarget' | 'unknown';
export type GameInternalUnits = 'extractor' | 'landFactory' | 'airFactory' | 'seaFactory' | 'commandCenter' | 'turret' | 'antiAirTurret' | 'builder' | 'tank' | 'hoverTank' | 'artillery' | 'helicopter' | 'airShip' | 'gunShip' | 'missileShip' | 'gunBoat' | 'megaTank' | 'laserTank' | 'hovercraft' | 'ladybug' | 'battleShip' | 'tankDestroyer' | 'heavyTank' | 'heavyHoverTank' | 'laserDefence' | 'dropship' | 'tree' | 'repairbay' | 'NukeLaucher' | 'AntiNukeLaucher' | 'mammothTank' | 'experimentalTank' | 'experimentalLandFactory' | 'crystalResource' | 'wall_v' | 'fabricator' | 'attackSubmarine' | 'builderShip' | 'amphibiousJet' | 'supplyDepot' | 'experimentalHoverTank' | 'turret_artillery' | 'turret_flamethrower' | 'fogRevealer' | 'spreadingFire' | 'antiAirTurretT2' | 'turretT2' | 'turretT3' | 'damagingBorder' | 'zoneMarker' | 'editorOrBuilder' | 'UNKNOWN';
