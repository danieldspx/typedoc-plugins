import { DeclarationReflection, ProjectReflection, ReflectionKind } from 'typedoc';

export class ANodeReflection extends DeclarationReflection {
	public get depth(): number {
		return this.parent instanceof ANodeReflection ? this.parent.depth + 1 : 0;
	}
	public constructor(
		name: string,
		kind: ReflectionKind,
		public readonly module: ProjectReflection | DeclarationReflection,
		public override readonly parent: ProjectReflection | DeclarationReflection = module,
	){
		super( name, kind, parent );
	}
}