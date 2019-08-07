<template>
    <div>
        <h3>{{title}}</h3>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="审批人">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
                <el-select v-model="formInline.region" placeholder="活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <p>dogInfo:{{dogInfo}}</p>
        <p>msg:{{msg}}</p>
        <p>共{{count}}条数据</p>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    prop="date"
                    align="center"
                    label="日期"
                    min-width="100">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    align="center"
                    min-width="100">
            </el-table-column>
            <el-table-column
                    min-width="100"
                    prop="address"
                    align="center"
                    label="地址">
            </el-table-column>
        </el-table>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Emit, Watch} from "vue-property-decorator";
    import {getTableList} from "../api/detail";


    /*
    * tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
    * */


    /*
    * request({
        url:'/user/login',
        method:'post',
        data
    })
    * */

    //定义接收数据类型
    interface TableData {
        date: string,
        name: string,
        address: string
    }

    interface FormInline {
        user: string,
        region: string
    }

    //定义接口类型 泛型
    interface Result<T> {
        ok: 0 | 1;
        data: T[]
    }


    interface Animal {
        name: string,
        age: number,

        info(): string
    }

    class Dog implements Animal {
        constructor(public name = '', public age: number) {
        }

        info(): string {
            return this.name + ' :' + this.age;
        }
    }

    function greets(animal: Dog) {
        return animal.info();
    }

    const NewDog = new Dog('Tom', 10)

    @Component
    export default class Detail extends Vue {
        /*
        * public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
            private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
            protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
        * */
        constructor(props: any) {
            super(props)
        }

        @Prop({default: 'Detail'}) private title!: string //断言

        private tableData: TableData[] = []
        private formInline = {
            user: '',
            region: ''
        }
        private dogInfo: string = ''
        private msg = ''

        async onSubmit() {
            const res = await getTableList(this.formInline)
            this.tableData = res.data.list
            this.$message.success('获取数据成功')
        }

        //生命周期
        mounted() {
            this.dogInfo = greets(NewDog)
        }

        //计算属性
        get count(): number {
            return this.tableData.length;
        }

        //watch
        @Watch('formInline.user')
        onMsgChange(newVal: string, oldVal: string) {
            this.msg = newVal
            this.setMsg()
        }

        @Emit('getMsg')
        private setMsg():string{
            return this.formInline.user
        }
    }
</script>

<style scoped>

</style>
