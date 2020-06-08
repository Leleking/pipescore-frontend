<template>
    <div>
        <div class="row">
            <div class="col-md-3">
                <div class="card card-block p-25">
                    <div class="counter counter-lg">
                        <span class="counter-number"><i class="md-file"></i></span>
                        <div class="counter-label text-uppercase">Assignment</div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-block p-25">
                    <div class="counter counter-lg">
                        <span class="counter-number"><i class="fa fa-comment"></i></span>
                        <div class="counter-label text-uppercase">Chat</div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-block p-25">
                    <div class="counter counter-lg">
                        <span class="counter-number"><i class="fa fa-question"></i></span>
                        <div class="counter-label text-uppercase">Choice</div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-block p-25">
                    <div class="counter counter-lg">
                        <span class="counter-number"><i class="fa fa-database"></i></span>
                        <div class="counter-label text-uppercase">Database</div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-block p-25">
                    <div class="counter counter-lg">
                        <span class="counter-number"><i class="fa fa-puzzle-piece"></i></span>
                        <div class="counter-label text-uppercase">External Tool</div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-block p-25">
                    <div class="counter counter-lg">
                        <span class="counter-number"><i class="fa fa-file-audio"></i></span>
                        <div class="counter-label text-uppercase">Feedback</div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-block p-25">
                    <div class="counter counter-lg">
                        <span class="counter-number"><i class="fa fa-comments"></i></span>
                        <div class="counter-label text-uppercase">Forum</div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-block p-25">
                    <div class="counter counter-lg">
                        <span class="counter-number"><i class="fa fa-folder-open"></i></span>
                        <div class="counter-label text-uppercase">Glossary</div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div @click="showActivity('lesson')" class="card card-block p-25">
                    <div class="counter counter-lg">
                        <span class="counter-number"><i class="fa fa-file-powerpoint"></i></span>
                        <div class="counter-label text-uppercase">Lesson</div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-block p-25">
                    <div class="counter counter-lg">
                        <span class="counter-number"><i class="fa fa-shapes"></i></span>
                        <div class="counter-label text-uppercase">Quiz</div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-block p-25">
                    <div class="counter counter-lg">
                        <span class="counter-number"><i class="fa fa-user"></i></span>
                        <div class="counter-label text-uppercase">SCORM package</div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-block p-25">
                    <div class="counter counter-lg">
                        <span class="counter-number"><i class="fa fa-user"></i></span>
                        <div class="counter-label text-uppercase">Survey</div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-block p-25">
                    <div class="counter counter-lg">
                        <span class="counter-number"><i class="fa fa-user"></i></span>
                        <div class="counter-label text-uppercase">Wiki</div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-block p-25">
                    <div class="counter counter-lg">
                        <span class="counter-number"><i class="fa fa-user"></i></span>
                        <div class="counter-label text-uppercase">Workshop</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            
            }
        },
        methods: {
            showActivity(payload) {
                this.$emit('showActivity',payload)
            }
            
        }
    }
</script>

<style lang="scss" scoped>

</style>