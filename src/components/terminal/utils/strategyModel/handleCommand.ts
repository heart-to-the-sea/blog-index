export interface HandleCommand {
  /**
   * 策略模式具体命令处理方法
   * @param commandList 命令列表
   * @param content 上下文
   * @returns 
   */
  handler: (commandList: string[], content: HTMLDivElement) => Promise<any>;
}
