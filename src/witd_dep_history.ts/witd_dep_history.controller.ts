import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FilterQuery } from 'mongoose';
import { AccountDto } from 'src/user/dto/account.dto';
import { CardDto } from 'src/user/dto/card.dto';
import { Card__Dto } from 'src/user/dto/card__.dto';
import { CreateSchemaDto } from 'src/user/dto/create-user.dto';
import { TokenDto } from 'src/user/dto/token.dto';
import { WithdrawDto } from 'src/user/dto/withdraw.dto';
import { With_Dep_Save } from 'src/user/dto/w_d_history.dto';
import { W_d_history } from 'src/user/schemas/w_d_history.schema';
import { WithdrawService } from './witd_dep_history.service';

@ApiTags('User Transactions')
@Controller("me")
export class WithdrawController {    
    constructor( private withdService: WithdrawService){}
    
    ////////////// findByAccount  //////////////////
    @Post('findAccount')
    async findUserAccount(@Body() userId: AccountDto){
        let see = await this.withdService.findbyAccount(userId)
        return see 
    } 

    ////////////// id //////////////////
    @Get('/:id')
    async findById(@Param('id') id: string){
        return this.withdService.findById(id)
    }

    ////////// Upload new card  ////////////
    @Post('/uploadnewcard/:id')
    async uploadCard(@Param('id') id: string, @Body() user: CardDto ){
        return this.withdService.findByID_UploadCard(id, user)
    }

    ////////////// Withdraw //////////////////

    @Post('withdraw/:id')
    async findByIdAndSaveBothWithraw(@Param('id') id: string, @Body() user: WithdrawDto){
        return this.withdService.findById_SaveWithdrawChange(id, user)
    } 

    ////////////  Deposit  ///////////////////

    @Post('deposit/:id')
    async findById_Card_Deposit(@Param('id') id: string, @Body() user: Card__Dto){
        return this.withdService.verifyId_CardNo_Deposit(id, user)
    }

    //////////// History  ////////////  
    // @Get('history/:id')
    // async getHistory(@Param('id') userId: FilterQuery<With_Dep_Save> ) : Promise<With_Dep_Save[]>{
    //     return this.withdService.withdrawHistory(userId)
    // }
     @Get('history/:id')
    async getHistory(@Param('id') userId: FilterQuery<With_Dep_Save> ) : Promise<With_Dep_Save[]>{
        return this.withdService.withdrawHistory(userId)
    }

}
