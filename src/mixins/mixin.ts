import { Vue, Component, Provide } from 'vue-property-decorator';

@Component
export default class TestMixin extends Vue {
  @Provide() public mixinData: number = 0;

  public mixinMethod(): void {
    this.mixinData += 1;
  }
}
